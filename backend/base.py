from flask import Flask

app = Flask(__name__)


@app.route("/")
@app.route('/hello')
def my_profile():
    hello = "Hello world"

    return hello

if __name__ == "__main__":
    app.run(debug=True)