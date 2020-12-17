# Generated by Django 3.0.9 on 2020-12-17 12:44

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('house', '0004_assignment'),
    ]

    operations = [
        migrations.AddField(
            model_name='assignment',
            name='Completed',
            field=models.CharField(choices=[('Yes', 'Yes'), ('No', 'No')], default='No', max_length=3),
        ),
        migrations.AlterField(
            model_name='assignment',
            name='Estimated_Time',
            field=models.IntegerField(default='0', validators=[django.core.validators.MaxValueValidator(120), django.core.validators.MinValueValidator(1)]),
        ),
    ]
