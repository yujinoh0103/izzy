from django.http import JsonResponse
from django.shortcuts import render, redirect

from .contacts import QuestionForm
from django.utils import timezone
def index(request):
    return render(request, 'index.html')

def bio(request):
    return render(request, 'bio.html')  # play.html을 렌더링

def play(request):
    request.session['mode'] = 'default'
    return render(request, 'play.html')
    # 플레이 페이지 렌더링


def contact(request):
    if request.method == 'POST':
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)
            question.create_date = timezone.now()
            question.save()
            # 폼 제출 성공 시 JSON 응답
            return JsonResponse({'success': True})
        else:
            # 폼 유효성 검사 실패 시 JSON 응답
            return JsonResponse({'success': False, 'errors': form.errors})
    else:
        form = QuestionForm()

    context = {'form': form}
    return render(request, 'contact.html', context)

def work(request):
    return render(request, 'work.html')  # play.html을 렌더링