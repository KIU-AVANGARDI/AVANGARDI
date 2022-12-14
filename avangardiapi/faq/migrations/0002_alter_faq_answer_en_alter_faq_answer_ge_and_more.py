# Generated by Django 4.0.5 on 2022-10-22 09:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('faq', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faq',
            name='answer_en',
            field=models.TextField(default='Answer', max_length=1000),
        ),
        migrations.AlterField(
            model_name='faq',
            name='answer_ge',
            field=models.TextField(default='პასუხი', max_length=1000),
        ),
        migrations.AlterField(
            model_name='faq',
            name='question_en',
            field=models.CharField(default='Question', max_length=255),
        ),
        migrations.AlterField(
            model_name='faq',
            name='question_ge',
            field=models.CharField(default='კითხვა', max_length=255),
        ),
    ]
