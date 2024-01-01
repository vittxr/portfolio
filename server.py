from flask import Flask, redirect, render_template, request, url_for 
from flask_mail import Mail, Message 
from config import config

app = Flask(__name__)
app.config.from_object(config['default'])

mail = Mail(app)

@app.route("/")
def index(): 
    mail_response = request.args.get("mail_response")
    if mail_response: 
        return render_template("index.html", mail_response=mail_response)

    return render_template("index.html")

@app.route("/sendMail", methods=["POST"])
def sendMail():
    sender_name=request.get_json("name")
    sender_email=request.get_json("email")
    msg_content = request.get_json("message")

    if sender_name and sender_email and msg_content: 
        print(sender_name, sender_email, msg_content)

        msg = Message("Email do Portfolio", sender="vitor.roberto3022@outlook.com", recipients=["vitor.roberto3022@gmail.com"])

        msg.body = f"""
                     message: {msg_content}
                     enviado por -> name: {sender_name}  email: {sender_email}
                   """

        with app.app_context():
            mail.send(msg)

        return redirect(url_for("index", mail_response="Email enviado com sucesso! Obrigado pelo contato :)."))
    return redirect(url_for("index", mail_response="Algo deu errado. Tente novamente, por favor"))
    
if __name__ == '__main__':
    app.run(debug=1)