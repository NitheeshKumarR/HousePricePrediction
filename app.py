from flask import Flask, render_template, request
import joblib
import numpy as np
import math

app = Flask(__name__)
model = joblib.load("model/chennai_house_price_prediction.joblib")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        features = [float(x) for x in request.form.values()]
        prediction = np.expm1(model.predict([features]))
        output = math.ceil(prediction)
        return render_template('result.html', prediction_text=f"Predicted Price: ₹{output}")
    except:
        return render_template('result.html', prediction_text="Error in input. Please enter valid numbers.")

if __name__ == "__main__":
    app.run(debug=True)
