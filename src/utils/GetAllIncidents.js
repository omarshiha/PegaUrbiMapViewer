import {genericAPI, getAllIncidentsAPI, getAllInspectorsAPI, getDefineViolatorsLookupAPI} from "./Consts";
import axios from "axios";

let staticToken = "eyJraWQiOiJmZDVlYmI3ZjQzZWE1YzdlYTUwMTU4YmJkN2E2MzNlZSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJhdWQiOiJ1cm46OTc3ODE1NTY2NjQ0MjA4NjgzODgiLCJzdWIiOiI5Nzc4MTU1NjY2NDQyMDg2ODM4OCIsImFwcF9uYW1lIjoiQ0lTIiwibmJmIjoxNzMzMzM5OTk5LCJhcHBfdmVyc2lvbiI6IjAxLjAxLjAzIiwiaXNzIjoidXJuOm1jcHN0Zy5tb21yYWguZ292LnNhIiwiZXhwIjoxNzMzMzQzNTk5LCJpYXQiOjE3MzMzMzk5OTksImp0aSI6ImZhYzkyMmNiM2ZiNGE1NzBkZGUwNTg1Mzk4NjFiODA1Iiwib3BlcmF0b3JfYWNjZXNzIjoiQ0lTOkludGVyZmFjZSJ9.SY0U5jpn_aDGQTbZrHC0diRf4KH8YhTHmdUzdBbaZ8XWTpexSgY7epvN8tTruCjsbiyAyXLpgDhPTPX0WgbfztZ_CDWNCJqTUTPjdAsnU0m-YfFmqpPK7ZC0OkuN21zT1C4rNg0WU_WRVR2jbzBZUokZqAi6cgBRumXqbqr88GR-seRR-CGlUY4itrR5U1SgcC6hdRUgceJX28suKmXfbDIHAIcuiOiouTVUQT2Uyy3Fu32r1EhpzJfCD24Rk6Y6PrrPjqC3hiaR5G1dZ0hJCG4HG-XyCKY8ujteFa6_B3mkR6sjz8CwxbEv8I80KXx7MDNzf79tg_8bg7qcuOM7cg1z7zyLHwFU4Y6PlqMr4VVyWy_FKMn99Dy8hFeJbXNRIW8pmeV1_yNSY433svODGKv_UQv9g8ixohCXVDOCYhzi10BxsPxyMe1OGe4VnidOfvgkMWY_dXnF4PXTUSpZHdEQiIf6i2KPvEuSfNlh_hIwRPW9nJ-dffXlMaWgrqwoYf-5qiqm8Cwzy2KsKTwTdFEWL-DYG_T2nsB8qyX_LS6kmZksw9PALJegeqrLsR6Pt277Z_dIFopoGr9z-5N3bfHo6tKSi6GrPfiRIrmUqs43Hu0zW0GMjbtX4GRM9ORU5rgsIMmWy4dzncoROM3MhjmTwzbx5lzToVTOzUbjZZs"

let staticRes = {
    "AllowedBulkActions": [
        "Push Incidents To CIS",
        "Push Incidents To CRM",
        "Wrong Incident"
    ],
    "IncidentList": [
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21149055_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656717",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.883161937,
            "CoordinateY": 21.325041101,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "755cf0f3-a5b4-4536-842a-ec38ff22e905/1723454420981.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "17472419_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658046",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.868263721,
            "CoordinateY": 21.379376781,
            "IncidentDate": "2024-07-02",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "756c26d3-5730-417a-a943-faea4895464f/1719911862859.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21098031_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658202",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.888529602,
            "CoordinateY": 21.35483154,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "e4ad951f-1ce7-4a5c-86ea-bf7d062b9133/1723373571093.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21183378_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658079",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.940409681,
            "CoordinateY": 21.339820327,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "d6f9cd30-b481-4f9a-a407-9b351ae1d458/1723541245971.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "17514766_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656843",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.873204661,
            "CoordinateY": 21.373831011,
            "IncidentDate": "2024-07-02",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "b79123ed-3ae7-4896-ad24-6b471d295206/1719916684826.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18767344_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656951",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.932590907,
            "CoordinateY": 21.348538768,
            "IncidentDate": "2024-07-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "ec35ccb8-c50a-4441-a984-1e686b8607a1/1720771933160.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21149019_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658074",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.925950829,
            "CoordinateY": 21.283875074,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "85994f39-5542-4ee9-aead-4f82b3c99a92/1723449875971.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21184966_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658237",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.00359269,
            "CoordinateY": 21.317173157,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3a4273d8-b762-4d23-ac92-62ec33609524/1723541653082.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18865562_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658139",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.909675438,
            "CoordinateY": 21.31961587,
            "IncidentDate": "2024-07-17",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "97e826ab-a81d-401c-899c-dad859f61293/1721205030835.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18773997_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658056",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.857252947,
            "CoordinateY": 21.417274145,
            "IncidentDate": "2024-07-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "af7b4981-c617-4a06-a26e-38a1fa14270d/1720853038140.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "17327330_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658045",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.884566453,
            "CoordinateY": 21.366427539,
            "IncidentDate": "2024-07-02",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "c867c82c-1b8a-486b-9f11-56a96c3d252f/1719904359863.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20329720_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658190",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.971197713,
            "CoordinateY": 21.32634278,
            "IncidentDate": "2024-08-05",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "a6047193-209d-4e0a-8113-51be988d4cab/1722844264177.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21181560_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658459",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.880020845,
            "CoordinateY": 21.338512018,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "fb68ea26-cd70-4ffd-b81e-f3fabf4f8d97/1723537295233.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18772994_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658118",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.867776855,
            "CoordinateY": 21.411685187,
            "IncidentDate": "2024-07-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "494a617e-c321-4f85-8947-45c35c7d8318/1720849440160.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "17223036_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658047",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.886222519,
            "CoordinateY": 21.397978449,
            "IncidentDate": "2024-07-02",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "cfad037c-94f4-481f-bad5-d2c6d6db2d1c/1719904019685.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20852655_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658176",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.871518633,
            "CoordinateY": 21.36424136,
            "IncidentDate": "2024-08-07",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "107f4023-c463-4fc9-bfd1-f75f4c27897c/1723014102187.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21159583_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658096",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.894448002,
            "CoordinateY": 21.308868634,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "40b23c24-5e0c-4f05-bad6-b7ea5cc3735f/1723459509945.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21159681_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658257",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.892147628,
            "CoordinateY": 21.309739092,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "40b23c24-5e0c-4f05-bad6-b7ea5cc3735f/1723459523927.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21091000_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658078",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.87730187,
            "CoordinateY": 21.351825394,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "0e17b08d-3a30-4318-b083-19d70b870106/1723367663052.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21118825_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658100",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.998130378,
            "CoordinateY": 21.328981093,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "31095268-f57e-47f6-ade1-f557fea42f38/1723440886100.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21083883_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658198",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.91249177,
            "CoordinateY": 21.357151523,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "0db0fadf-c30f-4f4e-9d2d-eaec283133a2/1723367325245.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20330074_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658174",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.01144092,
            "CoordinateY": 21.328302273,
            "IncidentDate": "2024-08-05",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "2df4679b-e275-43e0-9b1b-8cff52b0847d/1722844057170.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21091366_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658209",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.902983867,
            "CoordinateY": 21.3435504,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "9aaf83a7-4243-4921-9dd4-8e207ce39052/1723370330184.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21159916_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658239",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.904959232,
            "CoordinateY": 21.297891766,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "076edde3-480e-415b-ae24-f79061f74df9/1723458945957.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21184552_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658108",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.010588907,
            "CoordinateY": 21.327871542,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3a4273d8-b762-4d23-ac92-62ec33609524/1723541579088.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21099720_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658446",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.940246163,
            "CoordinateY": 21.339915357,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "f1210374-ef36-46a2-8500-346bebee6213/1723375413100.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21181624_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656327",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.880255747,
            "CoordinateY": 21.33784028,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "fb68ea26-cd70-4ffd-b81e-f3fabf4f8d97/1723537299178.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21184927_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656324",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.004855298,
            "CoordinateY": 21.317977767,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3a4273d8-b762-4d23-ac92-62ec33609524/1723541645114.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21181508_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656335",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.879776565,
            "CoordinateY": 21.339590965,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "fb68ea26-cd70-4ffd-b81e-f3fabf4f8d97/1723537289225.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21149279_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658231",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.88791122,
            "CoordinateY": 21.319998479,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "c9f260aa-ceee-4dbd-b195-d6d3a1a19107/1723453261955.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18875237_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658068",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.904037114,
            "CoordinateY": 21.317351665,
            "IncidentDate": "2024-07-17",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "45086a48-5e24-4102-93e3-2d6a5ed7d749/1721205358817.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21178200_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656736",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.873307598,
            "CoordinateY": 21.379141273,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "896651bc-70fa-4446-ab97-6d735b464379/1723535421070.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21160392_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658259",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.886770409,
            "CoordinateY": 21.319124178,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "40b23c24-5e0c-4f05-bad6-b7ea5cc3735f/1723459643934.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21116836_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658451",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.00252508,
            "CoordinateY": 21.316588713,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "6892d4fe-c4f2-416e-af39-b6ef099934ec/1723441016090.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18866113_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656954",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.901238721,
            "CoordinateY": 21.317437051,
            "IncidentDate": "2024-07-17",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "57ff9f8e-9e9e-4b49-9bc7-e4ead6c244db/1721204620819.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21098212_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656393",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.894804455,
            "CoordinateY": 21.352345832,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "e013b5f8-c995-4300-b6d1-8195d4b63be7/1723374913055.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20330414_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658196",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.005383308,
            "CoordinateY": 21.328349008,
            "IncidentDate": "2024-08-05",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "2df4679b-e275-43e0-9b1b-8cff52b0847d/1722844089196.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21099714_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656667",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.940072977,
            "CoordinateY": 21.340120283,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "f1210374-ef36-46a2-8500-346bebee6213/1723375410100.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21181726_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656337",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.880642707,
            "CoordinateY": 21.336439215,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "fb68ea26-cd70-4ffd-b81e-f3fabf4f8d97/1723537307375.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21181548_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656739",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.879911273,
            "CoordinateY": 21.338859182,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "fb68ea26-cd70-4ffd-b81e-f3fabf4f8d97/1723537293235.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21178072_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658365",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.874977633,
            "CoordinateY": 21.380213767,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "1967e1d5-c6bd-4814-a364-684acb00b453/1723534751096.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21176303_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658229",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.90643944,
            "CoordinateY": 21.34387004,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "314bb1a3-68bf-4190-b8e1-df91bcd4403c/1723533025092.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21108701_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658104",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.879739517,
            "CoordinateY": 21.340960815,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "ed08812e-fa55-473d-8147-33c8ae28e11c/1723386703014.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18764810_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658135",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.886836757,
            "CoordinateY": 21.3216593,
            "IncidentDate": "2024-07-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "e819c24f-c911-4578-a714-21c39ee96098/1720760220160.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21098243_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658433",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.895309766,
            "CoordinateY": 21.352158105,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "e013b5f8-c995-4300-b6d1-8195d4b63be7/1723374919053.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21126285_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656627",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.907345603,
            "CoordinateY": 21.326528872,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3a9f97f4-e740-41e8-8682-311d7ff01b1b/1723444822004.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20296144_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656575",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.192710683,
            "CoordinateY": 21.35615496,
            "IncidentDate": "2024-08-05",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "4fad4ca4-a380-4d97-ac4b-2ac3cf8b4e08/1722841960319.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21151342_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658374",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.006563572,
            "CoordinateY": 21.319313156,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "aad615fd-155f-4da9-bdba-cfcb1374f3ff/1723449361961.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "17514050_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656390",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.871457376,
            "CoordinateY": 21.36622556,
            "IncidentDate": "2024-07-02",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "ec4a82c8-7ba3-4fc4-8237-09c4d67ea2a8/1719916295829.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20851701_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658171",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.871559718,
            "CoordinateY": 21.372504423,
            "IncidentDate": "2024-08-07",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3b146394-246d-4cfe-b434-b0dda2db224d/1723014929175.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21181919_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656383",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.879344933,
            "CoordinateY": 21.342271867,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "c13f6a19-9899-4dc2-b2f5-4a9c6bb19d82/1723537275195.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21184933_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658450",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.004559218,
            "CoordinateY": 21.317778305,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3a4273d8-b762-4d23-ac92-62ec33609524/1723541647084.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21151658_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658072",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.99102368,
            "CoordinateY": 21.309664775,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "aad615fd-155f-4da9-bdba-cfcb1374f3ff/1723449438961.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20850373_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658439",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.871526527,
            "CoordinateY": 21.373220282,
            "IncidentDate": "2024-08-07",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3b146394-246d-4cfe-b434-b0dda2db224d/1723014773171.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21080470_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658092",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.9015532,
            "CoordinateY": 21.34963715,
            "IncidentDate": "2024-08-11",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "4386eed8-c7bc-4c9b-9f6b-a0a3a0bd58dd/1723364995213.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20989914_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658195",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.893942583,
            "CoordinateY": 21.35452395,
            "IncidentDate": "2024-08-08",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "ea0ef796-9ba3-453f-97da-e92e1fd10728/1723105338180.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21233088_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658268",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.897566361,
            "CoordinateY": 21.353583149,
            "IncidentDate": "2024-08-15",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "db010cc1-d392-4aba-bbad-861ce3ff5025/1723719671922.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18875112_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658385",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.905400207,
            "CoordinateY": 21.317755175,
            "IncidentDate": "2024-07-17",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "45086a48-5e24-4102-93e3-2d6a5ed7d749/1721205347808.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21160291_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658234",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.888529668,
            "CoordinateY": 21.318674151,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "40b23c24-5e0c-4f05-bad6-b7ea5cc3735f/1723459615949.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "GT_18433601_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658398",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.012811997,
            "CoordinateY": 21.328380582,
            "IncidentDate": "2024-07-07",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "4e5bc1fb-2ca3-4969-88e7-2da46fce49d0/1720343243258.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21184866_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658084",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.006030278,
            "CoordinateY": 21.31884751,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3a4273d8-b762-4d23-ac92-62ec33609524/1723541637084.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21160976_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658105",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.898942506,
            "CoordinateY": 21.303442963,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "6c0ebdab-b9a3-4b6f-9fd1-cdf793be2eb0/1723459471955.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "17491912_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658044",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.865107856,
            "CoordinateY": 21.36265811,
            "IncidentDate": "2024-07-02",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "b557dff5-d0e9-4bec-897d-a6a7d04cc75c/1719913324837.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21175668_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658101",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.875569792,
            "CoordinateY": 21.37964375,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "bc417c01-fcc4-4f9f-89e8-8e1515d27a2e/1723534268093.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21143315_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658243",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.9028456,
            "CoordinateY": 21.299746075,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "5d205198-648b-4e20-b1e0-24d80d2856e4/1723450197239.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21184488_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658251",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.009204923,
            "CoordinateY": 21.327898873,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3a4273d8-b762-4d23-ac92-62ec33609524/1723541571087.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21160317_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658366",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.888328667,
            "CoordinateY": 21.319218011,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "40b23c24-5e0c-4f05-bad6-b7ea5cc3735f/1723459620959.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21181695_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658114",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.88058808,
            "CoordinateY": 21.336820563,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "fb68ea26-cd70-4ffd-b81e-f3fabf4f8d97/1723537305249.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21178292_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658362",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.87366425,
            "CoordinateY": 21.379760938,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "896651bc-70fa-4446-ab97-6d735b464379/1723535568091.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21151322_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656585",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 40.006911151,
            "CoordinateY": 21.319634056,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "aad615fd-155f-4da9-bdba-cfcb1374f3ff/1723449359970.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21159627_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658236",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.893445526,
            "CoordinateY": 21.309251607,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "40b23c24-5e0c-4f05-bad6-b7ea5cc3735f/1723459515945.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21159651_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658258",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.892783378,
            "CoordinateY": 21.309480205,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "40b23c24-5e0c-4f05-bad6-b7ea5cc3735f/1723459519936.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21159356_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658091",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.900423281,
            "CoordinateY": 21.30173663,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "076edde3-480e-415b-ae24-f79061f74df9/1723458913950.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "20850248_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656564",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.871326828,
            "CoordinateY": 21.373701372,
            "IncidentDate": "2024-08-07",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "3b146394-246d-4cfe-b434-b0dda2db224d/1723014732179.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "18705675_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658060",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.998885396,
            "CoordinateY": 21.327670193,
            "IncidentDate": "2024-07-10",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202407",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "f8ed2b0a-b49e-42a2-96b8-b6d9f23a4171/1720594621294.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21149397_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "658082",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.8875635,
            "CoordinateY": 21.320825303,
            "IncidentDate": "2024-08-12",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "c9f260aa-ceee-4dbd-b195-d6d3a1a19107/1723453270976.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        },
        {
            "SubMunicipalityID": "002001010",
            "ExternalChannelIncidentID": "21175908_NSPCL-63",
            "MainClassificationName": "البناء تحت الانشاء",
            "MunicipalityName": "أمانة منطقة نجران",
            "ExternalChannelName": "Urbi",
            "ExternalChannelID": "009",
            "MunicipalityID": "002001",
            "ClassificationID": "NSPCL-63",
            "AllowedActions": [
                "Update Classification",
                "Define Violator"
            ],
            "SubMunicipalityName": "العزيزية",
            "ID": "656374",
            "ClassificationName": "الحواجز الخرسانية",
            "CoordinateX": 39.875255357,
            "CoordinateY": 21.38088427,
            "IncidentDate": "2024-08-13",
            "MainVpClassificationId": "81",
            "ListOfAttachments": [
                {
                    "AttachmentURL": "citylens-momrah-frames202408",
                    "AttachmentType": "JPEG",
                    "AttachmentName": "bc417c01-fcc4-4f9f-89e8-8e1515d27a2e/1723534327109.jpg",
                    "Coordinates": [],
                    "AttachmentSource": "OCI"
                }
            ]
        }
    ],
    "StatusCode": "CIS-200",
    "StatusMessage": "Fetched Incidents Successfully"
}

let staticInspectors = {
    "StatusCode": "CIS-200",
    "InspectorsList": [
        {
            "pyUserIdentifier": "1038015002",
            "pyLabel": "بدر عليثه على القاضى"
        }
    ],
    "StatusMessage": "Details Fetched Successfully"
}

let staticDefineViolatorLookup = {
    "ViolatorTypeList": [
        {
            "DOBList": [
                {
                    "ID": "1",
                    "value": "التقويم الهجري"
                },
                {
                    "ID": "2",
                    "value": "التقويم الميلادي"
                }
            ],
            "ID": "001",
            "value": "هوية وطنية"
        },
        {
            "DOBList": [
                {
                    "ID": "1",
                    "value": "التقويم الهجري"
                },
                {
                    "ID": "2",
                    "value": "التقويم الميلادي"
                }
            ],
            "ID": "002",
            "value": "إقامة"
        },
        {
            "ID": "004",
            "value": "رقم المنشأة الوطني"
        },
        {
            "VehicleIDTypeList": [
                {
                    "ID": "001",
                    "value": "رقم هيكل السيارة"
                },
                {
                    "RegistrationList": [
                        {
                            "ID": "1",
                            "value": "خاص"
                        },
                        {
                            "ID": "2",
                            "value": "نقل عام"
                        },
                        {
                            "ID": "3",
                            "value": "نقل خاص"
                        },
                        {
                            "ID": "4",
                            "value": "حافلة صغيرة عامة"
                        },
                        {
                            "ID": "5",
                            "value": "حافلة صغيرة عامة"
                        },
                        {
                            "ID": "6",
                            "value": "أجرة"
                        },
                        {
                            "ID": "7",
                            "value": "أشغال عامة"
                        },
                        {
                            "ID": "8",
                            "value": "تصدير"
                        },
                        {
                            "ID": "9",
                            "value": "دبلوماسي"
                        },
                        {
                            "ID": "10",
                            "value": "دراجة آلية"
                        },
                        {
                            "ID": "11",
                            "value": "مؤقت"
                        }
                    ],
                    "ID": "002",
                    "value": "رقم لوحة السيارة",
                    "VehiclePlateText": [
                        "أ",
                        "ب",
                        "ح",
                        "د",
                        "ر",
                        "س",
                        "ص",
                        "ط",
                        "ع",
                        "ق",
                        "ك",
                        "ل",
                        "م",
                        "ن",
                        "هـ",
                        "و",
                        "ي"
                    ]
                }
            ],
            "ID": "005",
            "value": "لوحة سيارة"
        }
    ],
    "StatusCode": "200",
    "StatusMessage": "Details Fetched Successfully",
    "LicenseTypeList": [
        {
            "ID": "Commercial",
            "value": "رخصة تجارية"
        },
        {
            "ID": "Construction",
            "value": "رخصة إنشائية"
        },
        {
            "ID": "Drilling",
            "value": "تصريح حفر"
        }
    ]
}


export const GetAllIncidents = async () => {
    const response = await axios.get(getAllIncidentsAPI, {
        headers: {
            'Authorization': `Bearer ${staticToken}`
        }
    }).catch((err) => {
        return staticRes
    });

    if (!response.ok){
        return staticRes
    }
    // throw new Error('Error getting data');
    return response.json();
};


export const GetAllInspectors = async () => {
    const response = await axios.get(getAllInspectorsAPI, {
        headers: {
            'Authorization': `Bearer ${staticToken}`
        }
    }).catch((err) => {
        return staticInspectors
    });

    if (!response.ok){
        return staticInspectors
    }
    // throw new Error('Error getting data');
    return response.json();
}


export const GetDefineViolatorsLookup = async () => {
    const response = await axios.get(getDefineViolatorsLookupAPI, {
        headers: {
            'Authorization': `Bearer ${staticToken}`
        }
    }).catch((err) => {
        return staticDefineViolatorLookup
    });

    if (!response.ok){
        return staticDefineViolatorLookup
    }
    // throw new Error('Error getting data');
    return response.json();
}


export const pushToCIS = async (incidentId, assignedInspector) => {
    const response = await axios.post(genericAPI, {
            "ActionType" : "Push Incidents To CIS",
            "AssignedInspector" : assignedInspector,
            "SelectedIncidents" : [  incidentId  ]
        }, {
        headers: {
            'Authorization': `Bearer ${staticToken}`
        }
    }).catch((err) => {
        return staticInspectors
    });

    if (!response.ok){
        return staticInspectors
    }
    // throw new Error('Error getting data');
    return response.json();
}
