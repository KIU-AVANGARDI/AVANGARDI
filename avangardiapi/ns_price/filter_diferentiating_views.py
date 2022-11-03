import pandas as pd
import os
from django.http import JsonResponse
import json


def ns_price_standard_decor_filters(request):
    module_dir = os.path.dirname(__file__)
    file_path = os.path.join(module_dir, 'prices.xlsx')
    excel_data = pd.read_excel(file_path)
    data = pd.DataFrame(excel_data,
                        columns=['კოლექცია', 'ოვალების რაოდენობა', 'სიგანის დიაპაზონი', 'სიგრძე', 'ერთეულის ფასი',
                                 'სულ ღირებულება'])
    dict = {
        'კოლექცია': [],
        'ოვალების რაოდენობა': [],
        'სიგანის დიაპაზონი': [],
        'სიგრძე': [],
    }
    for dv in data.values:
        if str(dv[0]) not in dict["კოლექცია"]:
            dict["კოლექცია"].append(str(dv[0]))
        if str(dv[1]) not in dict["ოვალების რაოდენობა"]:
            dict["ოვალების რაოდენობა"].append(str(dv[1]))
        if str(dv[2]) not in dict["სიგანის დიაპაზონი"]:
            dict["სიგანის დიაპაზონი"].append(str(dv[2]))
        if str(dv[3]) not in dict["სიგრძე"]:
            dict["სიგრძე"].append(str(dv[3]))
    print(dict)
    return JsonResponse(dict)