from django import forms
from .models import Contact


class QuestionForm(forms.ModelForm):
    class Meta:
        model = Contact # 사 용 할 모 델
        fields = ['name', 'email', 'message']