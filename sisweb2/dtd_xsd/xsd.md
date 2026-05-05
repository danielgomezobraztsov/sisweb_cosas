## EJ1: Crear un XSD para este XML:

```xml
<items>
    <item>
        <name>Item 1</name>
        <photo>http://example.com/photo1.png</photo>
        <tags>Tag1, Tag2</tags>
        <diameter>32</diameter>
        <weight>540</weight>
        <price>60</price>
        <size>Big</size>
    </item>
    <item>
        <name>Item 2</name>
        <photo>http://example.com/photo2.jpg</photo>
        <tags>Tag1</tags>
        <diameter>23</diameter>
        <weight>340</weight>
        <price>50.1</price>
    </item>
</items>
```

El XSD:
```xsd
<?xml version="1.0" encoding="UTF-8"?>

<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:element name="items">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="item" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="name" type="xs:string"/>
                            <xs:element name="photo" type="xs:anyURI"/>
                            <xs:element name="tags" type="xs:string"/>
                            <xs:element name="diameter" type="xs:positiveInteger"/>
                            <xs:element name="weight" type="xs:positiveInteger"/>
                            <xs:element name="price" type="xs:positiveDecimal"/>
                            <xs:element name="size" minOccurs="0">
                                <xs:simpleType>
                                    <xs:restriction base="xs:string">
                                        <xs:enumeration value="Big"/>
                                        <xs:enumeration value="Small"/>
                                    </xs:restriction>
                                </xs:simpleType>
                            </xs:element>
                        </xs:sequence>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

## EJ2: Crear un XML para este XSD:

```xsd
<?xml version="1.0" encoding="utf-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

    <xs:element name="Orderdetails">
        <xs:complexType>
            <xs:sequence>
                <xs:element maxOccurs="unbounded" name="Customer">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element minOccurs="0" name="fname">
                                <xs:complexType>
                                    <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                            <xs:attribute name="from" type="xs:string" use="required" />
                                        </xs:extension>
                                    </xs:simpleContent>
                                </xs:complexType>
                            </xs:element>

                            <xs:element minOccurs="0" name="cname" type="xs:string" />

                            <xs:element name="destination">
                                <xs:complexType>
                                    <xs:simpleContent>
                                        <xs:extension base="xs:string">
                                            <xs:attribute name="Country" type="xs:string" use="required" />
                                            <xs:attribute name="Delivdate" type="xs:string" use="required" />
                                        </xs:extension>
                                    </xs:simpleContent>
                                </xs:complexType>
                            </xs:element>

                            <xs:element minOccurs="0" name="email" type="xs:string" />
                            <xs:element minOccurs="0" name="eid" type="xs:string" />
                        </xs:sequence>

                        <xs:attribute name="id" type="xs:unsignedByte" use="required" />
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>

</xs:schema>
```

Y el XML:

```xml
<OrderDetails>
    <Customer>
        <fname from="">Texto</fname>
        <cname>Texto</cname>
        <destination Country="" Delivdate=""/>
        
```