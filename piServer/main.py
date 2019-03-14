from flask import Flask, request
from minisom import MiniSom
import numpy as np
import random 
import pandas as pd 

app = Flask(__name__)

def process(data):
    data = np.fromstring(data, sep=',')
    with open('som_8_8_1_gaussian.p', 'rb') as infile:
        som = pickle.load(infile)
        label_pred = predict_user(data, som);
        if(label_pred == 0):
            return "Phillip is typing";
        else:
            return "Phillip is not typing"; 
    return "Determining user..."

@app.route('/', methods=["POST"])
def result():
    username = process(request.form['data']);
    return username
 
if __name__ == "__main__":
    app.run()

def predict_user(data, som):
    pd.read_csv('data/test_data.csv')
    df_data = df.drop(columns=['subject'])
    X = df_data.iloc[:, :].values 
    y = df["subject"].loc[:].values
    
    winner = som.winner(data)
    labels_map = som.labels_map(X, y)
    label_names = np.unique(y)
    if(type(labels_map[winner]) != list):
        label_pred = labels_map[winner].most_common(1)[0][0]
    else:
        label_pred = 0;
    return label_pred
