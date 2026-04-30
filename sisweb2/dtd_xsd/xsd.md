## EJ1: Crear un XSD para este XML:

```xml

```

El XSD:
```xsd


<xs:element name="items">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="item" maxOccurs="unbounded">
                <xs:complexType>
                    <xs:sequence>
                        <xs:element name="name" type="xs:string"/>
                        <xs:element name="photo" type="xs:anyURI"/>
                        <xs:element name="tags" type="xs:string"/>
                        <xs:element name="diameter" type="xs:integer"/>
                        <xs:element name="weight" type="xs:integer"/>
                        <xs:element name="price" type="xs:decimal"/>
                        <xs:element name="size" type="xs:string" minOccurs="0"/>
                    </xs:sequence>
                </xs:complexType>
            </xs:element>
        </xs:sequence>
    </xs:complexType>
</xs:element>
```
