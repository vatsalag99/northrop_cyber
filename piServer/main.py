from flask import Flask, request
app = Flask(__name__)
@app.route('/', methods=['POST'])
def process():
    print("TODO")
def result():
    username = process(request.form['data']);
    return username
