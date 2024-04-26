import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle
import warnings
from sklearn.exceptions import InconsistentVersionWarning
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/predict_api": {"origins": "*"}})


# Suppress the InconsistentVersionWarning
warnings.filterwarnings("ignore", category=InconsistentVersionWarning)

model = pickle.load(open('Model.pkl', 'rb'))

@app.route('/')
def home():
    return "hello world"

# @app.route('/predict', methods=['POST'])
# def predict():
#     features = [float(x) for x in request.form.values()]
#     final_features = [np.array(features)]

#     prediction = model.predict(final_features)
#     print("final features", final_features)
#     print("prediction:", prediction)
#     output = round(prediction[0], 2)
#     print(output)
#     if output == 0:
#         return render_template('index.html', prediction_text='THE PATIENT DOES NOT HAVE PARKINSONS DISEASE')
#     else:
#         return render_template('index.html', prediction_text='THE PATIENT HAS PARKINSONS DISEASE')


@app.route('/predict_api', methods=['POST'])
def results():
    try:
        data = request.get_json(force=True)
        # Convert input data to numeric values
        numeric_data = {key: float(value) for key, value in data.items()}
        prediction = model.predict([np.array(list(numeric_data.values()))])
        output = round(prediction[0], 2)
        if output == 0:
            return jsonify('THE PATIENT DOES NOT HAVE PARKINSONS DISEASE')
        else: 
            return jsonify('THE PATIENT HAS PARKINSONS DISEASE')
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == "__main__":
    app.run(debug=False)


