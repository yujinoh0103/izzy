from django.contrib import admin
from .models import Contact  # 상대 경로로 모델을 가져옵니다.


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_at')
    search_fields = ('name', 'email')
