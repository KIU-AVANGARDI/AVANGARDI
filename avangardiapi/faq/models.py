from django.db import models

class Faq(models.Model):
    question_ge = models.CharField(null=False,max_length=255,unique=False, default="კითხვა")
    question_en = models.CharField(null=False, max_length=255, unique=False, default="Question")
    answer_ge = models.TextField(null=False, max_length=1000, unique=False, default="პასუხი")
    answer_en = models.TextField(null=False, max_length=1000, unique=False, default="Answer")


    def __str__(self):
        return self.question_ge

