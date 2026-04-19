from django.shortcuts import render

def formulario_view(request):
    return render(request, 'formulario/formulario.html')

