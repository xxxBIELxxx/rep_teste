from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request,'portifolioA/index.html')


def proj_calc(request):
    return render(request, 'portifolioA/calculadora.html')