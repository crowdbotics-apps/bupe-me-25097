# Generated by Django 2.2.19 on 2021-03-23 16:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_auto_20210319_1228'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='day',
            field=models.CharField(choices=[('1', 'Monday'), ('2', 'Tuesday'), ('3', 'Wednesday'), ('4', 'Thursday'), ('5', 'Friday'), ('6', 'Saturday'), ('7', 'Sunday')], default='1', max_length=225),
        ),
    ]
