# myapp/urls.py
from django.urls import path
from . import views

app_name = 'myapp'  # 네임스페이스 설정

urlpatterns = [
    path('', views.index, name='index'),  # 예시로 index view를 등록
]
