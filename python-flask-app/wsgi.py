from flask import Flask
application = Flask(__name__)

@application.route("/")
def hello():
    return "Hello from Flask in OCP"

if __name__ == "__main__":
    application.run()
