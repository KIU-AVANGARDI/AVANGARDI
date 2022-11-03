import pandas as pd
import os
from django.http import JsonResponse


def ns_price_standard_decor(request, *args, **kwargs):
    module_dir = os.path.dirname(__file__)
    file_path = os.path.join(module_dir, 'prices.xlsx')
    excel_data = pd.read_excel(file_path)
    data = pd.DataFrame(excel_data,
                        columns=['კოლექცია', 'ოვალების რაოდენობა', 'სიგანის დიაპაზონი', 'სიგრძე', 'ერთეულის ფასი',
                                 'სულ ღირებულება'])
    collection = request.GET.get("კოლექცია")
    oval_quantity = request.GET.get("ოვალების რაოდენობა")
    width_range = request.GET.get("სიგანის დიაპაზონი")
    length = request.GET.get("სიგრძე")
    resp = list(filter(lambda x: x[0] == collection and x[1] == oval_quantity and x[
        2] == width_range and str(x[3]) == length, data.values))[0]
    return JsonResponse({"unit_price": resp[4], "full_price": resp[5]})



