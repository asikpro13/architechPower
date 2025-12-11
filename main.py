# -*- coding: utf-8 -*-
from flask import Flask, render_template
from flask_cors import CORS

app = Flask(__name__, template_folder="templates/web", static_folder="static", static_url_path='')
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Access-Control-Allow-Origin'
app.config['JSON_AS_ASCII'] = False


@app.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, allow_unsafe_werkzeug=True)
