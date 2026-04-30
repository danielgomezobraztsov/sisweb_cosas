## EJ1: Crear un archivo XML para este DTD:

```dtd
<!DOCTYPE TVSCHEDULE [
<!ELEMENT TVSCHEDULE (CHANNEL+)>
<!ELEMENT CHANNEL (BANNER,DAY+)>
<!ELEMENT BANNER (#PCDATA)>
<!ELEMENT DAY (DATE,(HOLIDAY|PROGRAMSLOT+)+)>
<!ELEMENT HOLIDAY (#PCDATA)>
<!ELEMENT DATE (#PCDATA)>
<!ELEMENT PROGRAMSLOT (TIME,TITLE,DESCRIPTION?)>
<!ELEMENT TIME (#PCDATA)>
<!ELEMENT TITLE (#PCDATA)> 
<!ELEMENT DESCRIPTION (#PCDATA)>
<!ATTLIST TVSCHEDULE NAME CDATA #REQUIRED>
<!ATTLIST CHANNEL CHAN CDATA #REQUIRED>
<!ATTLIST PROGRAMSLOT VTR CDATA #IMPLIED>
<!ATTLIST TITLE RATING CDATA #IMPLIED>
<!ATTLIST TITLE LANGUAGE CDATA #IMPLIED>
]>
```
El XML:
```xml
<TVSCHEDULE NAME="Nombre">
<CHANNEL CHAN="Chan">
    <BANNER>Texto</BANNER>
    <DAY>
        <DATE>Date</DATE>
        <HOLIDAY>Holiday</HOLIDAY>
        <PROGRAMSLOT>
            <TIME>dsfsfsdf</TIME>
            <TITLE RATING="R" LANGUAGE="EN">dka</TITLE>
            <DESCRIPTION></DESCRIPTION>
        </PROGRAMSLOT>
    </DAY>
</CHANNEL>
```

---
## EJ2: Crear un DTD para este XML:

```xml
<articles>
    <article id="x34675">
        <name>Apache Spark Architecture</name>
        <month>december</month>
        <author name="kay vennisla"/>
        <reviews lang=""/>
        <feedback > high rating</feedback>
        <reviews lang="de">The best content with diagrams</reviews>
    </article>
</articles>
```

El DTD:
```dtd
<!ELEMENT articles (article+)>
<!ELEMENT article (name, month, author, (reviews|feedback)+)>
<!ATTLIST article id CDATA #REQUIRED>
<!ELEMENT name (#PCDATA)>
<!ELEMENT month (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ATTLIST author name CDATA #REQUIRED>
<!ELEMENT reviews (#PCDATA)>
<!ATTLIST reviews lang CDATA #REQUIRED>
<!ELEMENT feedback (#PCDATA)>
```