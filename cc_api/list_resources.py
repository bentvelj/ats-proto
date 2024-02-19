import boto3
import json


def handler(event, context):
    print(f"event={event}")
    resource_type = event.get("type")

    if resource_type is None:
        return {
            "statusCode": 500,
            "body": json.dumps({"message": "Missing resource type in request"}),
        }

    client = boto3.client("cloudcontrol")

    response = client.list_resources(TypeName=resource_type)
    print(f"response={response}")

    if response is None:
        return {
            "statusCode": 400,
            "body": json.dumps(
                {"message": "No resources found for type " + resource_type}
            ),
        }

    return response.get("ResourceDescriptions", {})
