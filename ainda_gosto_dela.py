import time
from rich.console import Console

console = Console()

def white(text, speed, cor="yellow"):
    linha = ""

    for letra in text:
        linha += letra
        console.print(f"[{cor}]{linha}", end="\r")
        time.sleep(speed)

    console.print(f"[bold {cor}]{text}")
    time.sleep(0.6)

def sing():
    console.print()

    white("eu nao tenho mais o que fazeeeeeer", 0.10)
    white("nãoooooooooooo", 0.08)

    console.print()
    console.print()

    white("e eu ainda gosto dela", 0.14)
    white("mas ela ja não gosta tanto assim", 0.11)
    white("a porta ainda esta aberta", 0.11)
    white("mas da janela ja não entra luz", 0.11)
    white("e eu ainda penso nela", 0.1)

sing()