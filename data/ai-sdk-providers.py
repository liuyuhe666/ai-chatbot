import json


result = dict()
with open('./ai-sdk-providers.txt', 'r') as file:
    for line in file.readlines():
        line = line.strip()
        [provider_name, model_name] = line.split(',')
        if provider_name not in result:
            result[provider_name] = [model_name]
        else:
            result[provider_name].append(model_name)
json.dump(result, open('./model.json', 'w'), indent=2, ensure_ascii=False)
