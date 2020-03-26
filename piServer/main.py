from flask import Flask, request
from minisom import MiniSom
import numpy as np
import random 
import pandas as pd 
import pickle
import random 
from sklearn.preprocessing import Normalizer

app = Flask(__name__)

def process(data):
    data = np.fromstring(data, sep=',')[:33]
    sc = Normalizer()
    data = sc.fit_transform(data)
    print(data)
    with open('som_8_8_1_gaussian.p', 'rb') as infile:
        som = pickle.load(infile)
        try:
            label_pred = predict_user(data, som);
            if(label_pred == 0):
                return "Jonah";
            else:
                return "Philip";
        except:
            return "Malformed password"
    return "Determining user..."

@app.route('/', methods=["POST"])
def result():
    username = process(request.form['data']);
    return username


def predict_user(data, som):
    df = pd.read_csv('test_data.csv')
    df_data = df.drop('subject', axis=1)
    X = df_data.iloc[:, :].values 
    y = df["subject"].loc[:].values
    
    winner = som.winner(data)
    labels_map = som.labels_map(X, y)
    label_names = np.unique(y)
    if(type(labels_map[winner]) != list):
        label_pred = labels_map[winner].most_common(1)[0][0]
        print("hello ")
    else:
        label_pred = random.randint(0,1);
    print(label_pred) 
    return label_pred
 
if __name__ == "__main__":
    app.run(host="0.0.0.0")
