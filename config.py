import os 

class Config: 
   MAIL_SERVER=os.getenv("MAIL_SERVER") or 'alguma coisa'
   MAIL_PORT=os.getenv("MAIL_PORT") or 'alguma coisa'
   MAIL_USE_TLS=os.getenv("MAIL_USE_TLS") or 'alguma coisa'
   MAIL_USE_SSL=False#os.getenv("MAIL_USE_SSL") or 'alguma coisa'
   MAIL_USERNAME=os.getenv("MAIL_USERNAME") or 'alguma coisa'
   MAIL_PASSWORD=os.getenv("MAIL_PASSWORD") or 'alguma coisa'

   @staticmethod 
   def init_app(app): 
      from werkzeug.middleware.proxy_fix import ProxyFix 
      app.wsgi_app = ProxyFix(app.wsgi_app) 

class HerokuConfig(Config):
   SSL_REDIRECT = True if os.getenv("DYNO") else False

config = {
   'default': Config
}