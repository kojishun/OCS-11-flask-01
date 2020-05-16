#app.py
from flask import Flask, request, render_template
import urllib
import numpy as np

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/func/<func>")
def exec_calculate(func):
    if func != "calc" :
        return "error"

    # Obtain query parameters
    a = request.args.get("a", default=0, type=float)
    b = request.args.get("b", default=0, type=float)
    op = request.args.get("op", "+")
    
    # Calculater
    if op == "+" or op == "add":
        ret = str(a + b)
    elif op == "-" or op == "sub":
        ret = str(a - b)
    elif op == "*" or op == "mul":
        ret = str(a * b)
    elif op == "/" or op == "div":
        if b == 0 :
            ret = "error(0 div)"
        else:
            ret = str(a / b)
    elif op == "**":
        ret = str(a ** b)
    else:
            ret = "error(unknown)"

    return ret

if __name__ == "__main__":
    app.run(debug=True, port=5000)