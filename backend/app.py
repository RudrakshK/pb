from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('/frontend/public/index.html')

if __name__ == '__main__':
   app.run()