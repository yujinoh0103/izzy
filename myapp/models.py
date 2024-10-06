from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)  # 이름 필드
    email = models.EmailField(max_length=100)               # 이메일 필드
    message = models.TextField()               # 메시지 필드
    created_at = models.DateTimeField(auto_now_add=True)  # 생성일 필드

    def __str__(self):
        return self.name
