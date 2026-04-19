from django.shortcuts import render, redirect

def login_view(request):
    return render(request, 'login/login.html')

def signup_view(request):
    return render(request, 'login/signup.html')

def home_view(request):
    return render(request, 'login/home.html')

def logout_view(request):
    return redirect('login')
