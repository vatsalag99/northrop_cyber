from flask import Flask, request
app = Flask(__name__)
@app.route('/', methods=['POST'])
def result():
    # Test weights here
    print(request.form['val'])

