from django.contrib import admin
from .models import *

class QuestionAdmin(admin.ModelAdmin):
    list_display = ('question',)
    list_filter = ['question' ]
    search_fields = ('question',)

admin.site.register(Question, QuestionAdmin)

class AnswerAdmin(admin.ModelAdmin):
    list_display = ('question', 'answer', 'user', 'created')
    list_filter = ['question', 'answer', 'user', 'created' ]
    search_fields = ('question', 'answer', 'user', 'created')

admin.site.register(Answer, AnswerAdmin)