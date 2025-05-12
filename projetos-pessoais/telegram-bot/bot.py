import logging
from telegram import Update
from telegram.ext import Updater, CommandHandler, MessageHandler, filters

# Defina seu Token aqui (obtido via BotFather)
TOKEN = 'seu_token_aqui'

# Ativa o log para depuração
logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)
logger = logging.getLogger(__name__)

# Comando start
def start(update: Update, context):
    update.message.reply_text("Olá, eu sou o seu bot! Como posso te ajudar hoje?")

# Comando help
def help(update: Update, context):
    update.message.reply_text("Eu sou um bot simples! Comandos disponíveis:\n/start - Iniciar o bot\n/help - Obter ajuda")

# Função para responder a mensagens de texto
def echo(update: Update, context):
    user_text = update.message.text  # Recebe o texto enviado pelo usuário
    update.message.reply_text(f"Você disse: {user_text}")

# Função principal que configura o bot
def main():
    # Cria o updater e passa o token
    updater = Updater(TOKEN)

    # Obtém o dispatcher para registrar os manipuladores
    dispatcher = updater.dispatcher

    # Registra os manipuladores de comandos e mensagens
    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("help", help))
    dispatcher.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, echo))

    # Inicia o bot
    updater.start_polling()

    # Roda o bot até o processo ser interrompido
    updater.idle()

if __name__ == '__main__':
    main()