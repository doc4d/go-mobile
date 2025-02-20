---
id: structure
title: Structure
---

Cette page affiche toutes les tables et tous les champs qui sont exposés en tant que ressources REST dans la base de données 4D, y compris les attributs de relation (basés sur les relations plusieurs à un et un à plusieurs). En fait, la page affiche une vue similaire à celle du [datastore ORDA](https://developer.4d.com/docs/ORDA/overview.html).

![Structure section](img/Structure-section-4D-for-iOS.png)


Utilisez cette page pour définir un sous-ensemble de votre structure physique à répliquer pour les appareils mobiles en sélectionnant les tables et les champs spécifiques à publier.

- Les tables publiées seront automatiquement ajoutées comme onglets de votre application.
- Les champs scalaires publiés seront disponibles lors de la définition de vos [formulaires liste et formulaires détaillés](https://developer.4d.com/go-mobile/docs/project-definition/forms/).
- Les champs de liens publiés (N vers 1 et 1 vers N) seront disponibles lors de la définition de vos [formulaires liste et formulaires détaillés](https://developer.4d.com/go-mobile/docs/project-definition/forms/) et sont dotés de fonctionnalités de navigation supplémentaires comme un bouton Relation.


:::note

Les tables et champs suivants ne sont pas listés dans cette page :

- Les tables et champs qui ne sont pas conformes aux règles d'[ORDA](https://developer.4d.com/docs/ORDA/dsmapping.html#structure-mapping).
- Les tables et champs dont le nom commence par "`__`" (double tiret bas).

:::

:::note

Seuls les attributs calculés dont les valeurs évoluent dans le temps - dépendant uniquement d'autres attributs de la même DataClass - seront mis à jour sur l'application mobile.

:::

## Sélection des tables et des champs à publier

Une table est publiée lorsqu'au moins un de ses champs est publié. Lorsqu'une table est publiée, elle est affichée en **gras**.

Pour sélectionner un champ à publier, cliquez sur un nom de table puis cliquez sur le champ dans la liste à droite. Vous pouvez également :

- Appuyez sur la **barre d'espace** pour sélectionner/désélectionner un champ
- Utilisez **Ctrl+clic** pour sélectionner tous les champs
- Utilisez **Publier** et **Tout publier** dans le menu local de la liste des champs.


### Filtrage des listes

Lorsqu'une liste a le focus, vous pouvez filtrer son contenu en utilisant la zone de recherche et un menu local :

![Filter](img/filter.png)

- Zone de **Recherche** : entrez les caractères à rechercher dans les noms de tables ou de champs
- **Trier par nom de table**/**Trier par nom de champ**: trier la liste par nom. Par défaut, les listes sont triées par date de création
- **Seulement les tables publiées**/**Seulement les champs publiés**: afficher uniquement les tables ou les champs qui ont été sélectionnés (publiés)


## Types de champs pris en charge

L'éditeur mobile affiche automatiquement la liste des champs qui sont éligibles à l'application mobile, en fonction de leur type :

![Fields](img/fields.png)

- Tous les [types de champs scalaires 4D](https://developer.4d.com/docs/Concepts/data-types.html) sauf [BLOB](https://developer.4d.com/docs/Concepts/blob.html).
- [Les champs objet](https://doc4d.github.io/go-mobile/docs/next/project-definition/structure/#object-attributes)
- [Champs calculés](#computed-attributes)
- [Les attributs d'alias](#alias-attributes) renvoyant **des valeurs scalaires** (affichées en *italique*).
- Les attributs de relation (N vers 1 et 1 vers N) sont pris en charge et peuvent être sélectionnés comme des champs. Ils ont des icônes spécifiques :
    - Icône du lien N vers 1 :  ![relation1](img/manyto1.png)
    - Icône du lien 1 vers N : ![relationN](img/1tomany.png)

:::info

Les noms sont basés sur les noms des liens dans l'éditeur de structure 4D, voir la page [Correspondance de la structure ORDA](https://developer.4d.com/docs/fr/ORDA/dsmapping.html#structure-mapping).

:::


## Utilisation des relations

### Les relations 1 vers N

Vous pouvez inclure **des relations 1 vers N** dans vos projets et afficher une liste de champs liés dans une nouvelle page de votre application.

Il vous suffit de :

* publier au moins un champ de la table cible (N)
* publier la relation à partir de la table source (1)

![Drop relation in detail form](img/Structure-1-to-N-relations-4D-for-iOS.png)

Puis, lorsque vos champs liés sont publiés, ils peuvent être utilisés de la même manière que les autres champs. Vous pourrez ainsi :

* Définir les propriétés des relations dans la page [Libellés et icônes](labels-and-icons.md).
* Déposer la relation 1 vers N dans un formulaire détaillé depuis la page [Formulaires](forms.md) pour créer un lien entre un formulaire détaillé et une table liée. Un bouton Relation sera automatiquement créé dans les formulaires détaillés pour accéder directement à la vue liée.

:::tip Tutorial

Voir le [**tutoriel des relations 1 vers N**](../tutorials/relations/one-to-many-relations) pour un exemple détaillé d'intégration d'une relation 1 vers N dans un projet mobile.

:::


### Les relations N vers 1

**Les relations N vers 1** peuvent être utilisées comme n'importe quel autre champ dans le processus de création d'une application. Lorsque vous sélectionnez une relation N vers 1 dans la liste des champs, vous pouvez sélectionner le(s) champ(s) de la table correspondante à publier dans votre application :

![Publish related tables](img/manyto1-tip.png)

Il vous suffit de cliquer sur le nom de la relation, puis de sélectionner le(s) champ(s) :

![Publish related tables](img/manyto1-select.png)

Par défaut, tous les champs éligibles de la table correspondante sont publiés.

:::tip Tutorial

Voir le [**tutoriel des relations N vers 1**](../tutorials/relations/many-to-one-relations) pour un exemple détaillé d'intégration d'une relation N vers 1 dans un projet mobile.

:::


### Les relations N vers N

À l'aide de la page Structure, vous pouvez publier des relations N vers 1 et N vers 1 à partir de vos relations N vers 1 parentes. Cela signifie que vous pouvez afficher des relations N vers N dans votre application et passer directement d'un formulaire liste à un autre formulaire liste.


:::tip Tutorial

Voir les [**Interactions des relations**](../tutorials/relations/relation-interactions) pour un exemple détaillé d'intégration d'une relation N vers 1 dans un projet mobile.

:::

## Champs calculés

Que vous travailliez sur Android ou iOS, vous pouvez afficher les [**champs calculés**](https://developer.4d.com/docs/fr/ORDA/ordaClasses.html#computed-attributes-1) dans votre application une fois qu'elle est générée, en les configurant depuis l'éditeur de projet. Les champs calculés sont le résultat de plusieurs champs combinés en un seul champ. Vous pourrez alors utiliser ce champ calculé comme n'importe quel autre champ dans le processus de création de votre application mobile, c'est-à-dire que vous allez pouvoir le visualiser et le publier à partir de la section Structure.

:::info

Dans les projets mobiles, seuls les champs calculés **scalaires** sont pris en charge (c'est-à-dire les champs calculés pour lesquels [`get` function](https://developer.4d.com/docs/ORDA/ordaClasses.html#function-get-attributename) renvoie une valeur scalaire (texte, booléen, date, heure, nombre)).

:::


Par exemple, au lieu d'avoir deux champs séparés comme le numéro de rue et le nom de la rue, ou le prénom et le nom de famille, vous pouvez les rassembler dans un seul champ que vous pouvez nommer "fullAddress" et "fullName".

Le processus est en fait assez simple !

### Côté 4D

Dans votre code, spécifiez les attributs que vous voulez utiliser et le champ calculé que vous voulez obtenir, en utilisant la syntaxe [*Class extends*](https://developer.4d.com/docs/Concepts/classes.html#class-extends-classname) et [exposed Function](https://developer.4d.com/docs/ORDA/ordaClasses.html#exposed-vs-non-exposed-functions) , comme suit :

```4d 
Class extends Entity

exposed Function get fullName->$fullName : Text
    $fullName:=This.FirstName+" "+This.LastName

exposed Function set fullName($fullName : Text)
$splitName:=Split string($fullName; "/")
If ($splitName.length=2)
    This.FirstName:=$splitName[0]
    This.LastName:=$splitName[1]
Else 
    // ERROR    
End if

exposed Function get fullAddress->$fullAddress : Text
    $fullAddress:=This.StreetNumber+" "+This.Street+" - "+This.Location

exposed Function set fullAddress($fullAddress : Text)
$splitAddress:=Split string($fullAddress; "/")
If ($splitAddress.length=3)
    This.StreetNumber:=$splitAddress[0]
    This.Street:=$splitAddress[1]
    This.Location:=$splitAddress[2]
Else 
    // ERROR    
End if
```

### Côté éditeur de projet

Dans l'éditeur de projet, une fois que le code est écrit, vos champs calculés deviennent disponibles, prêts à être publiés et utilisés comme tout autre champ dans le processus de création :


Dans le panneau **Structure** :

Les champs calculés `exposés` sont affichés dans la liste des attributs d'une `dataclass`.

![Structure section](img/Structure.png)

Dans le panneau **Libellé et Icônes** (icônes/libellés courts et longs) :

![Labels&icons section](img/labels-and-icons.png)

Dans le panneau **Formulaires** :

Les champs calculés présents dans le modèle de données sont, comme les autres champs, disponibles dans la liste des champs du panneau Formulaires (liste et détaillés). Ils se comportent de la même manière que les attributs de stockage du datastore.

![Forms section](img/Forms.png)

Dans le panneau **Données**, les champs calculés sont affichés dans la liste liée au bouton "Champs" de la zone Filtre de recherche.

:::note 4D for iOS

- Les champs calculés peuvent être utilisés avec des actions de tri.
- Un champ calculé sans un paramètre (readOnly) n'est pas disponible pour une action d'ajout ou de modification.
- Lorsque des actions d'ajout ou de modification de préréglages sont créées (si le paramètre est disponible et si 4D le permet), les paramètres des champs calculés doivent être disponibles lorsqu'ils sont liés à un champ.

:::note 4D for iOS

### Côté application mobile

Dans l'application mobile générée, sur iOS ou Android, les attributs simples et les champs calculés sont affichés.

![final app](img/final-app.png)


## Attributs de type alias

Sur Android ou iOS, vous pouvez utiliser [**les attributs de type alias**](https://developer.4d.com/docs/fr/ORDA/ordaClasses.html#alias-attributes)** scalaires** dans votre application mobile. An alias attribute is built above another attribute of the data model, named *target* attribute. The target attribute can belong to a related dataclass (available through any number of relation levels) or to the same dataclass. An alias attribute stores no data, but the path to its target attribute.

Alias attibutes must be **exposed** to be available to the editor. They are displayed in *italics*.

In mobile projects, only **scalar** alias attributes are supported, which means that the [kind](https://developer.4d.com/docs/API/DataClassAttributeClass.html#kind) of the last element of the target attribute path must be "storage". Other kinds are not supported.


Scalar alias attributes can be:

- [selected and published](#selecting-tables-and-fields-to-publish) like standard fields in the structure editor,
- used to [filter data](../project-definition/data#filter-queries),
- linked to fields as [parameters](../project-definition/actions#add-parameters-to-your-action) for **add** and **edit** preset actions,
- used as any other fields in the [Label & Icons section](../project-definition/labels-and-icons),
- dropped and displayed in [forms](../project-definition/forms).

:::caution

Scalar alias attributes **cannot be used** as [parameters for sort actions](../project-definition/actions#sort-action).

:::


## Object attributes

From the **Structure** section, you can select, use and display all [types](https://developer.4d.com/go-mobile/docs/project-definition/structure/#supported-field-types) of attributes in your mobile projects (text, dates, time, integers, etc), including **[object attributes](https://developer.4d.com/docs/Concepts/object.html)** (JSON format). In the field list, object attributes are distinguished by their **{}** icon.

![Structure section](img/object-attributes-structure.png)

You can use an object attribute as any other field in the other sections of the project editor (Data, labels & icons, Forms, etc. except for the Actions section).

From the **Labels&Icons** section, two formats are available to display your object attributes:

- **Human-readable** (YAML): the default format that displays a human-readable structured data in the mobile app
- **JSON Pretty Print**: the format that displays an indented JSON in the mobile app

![Labels-and-icons section](img/object-attributes-labels-and-icons.png)

Here's the result on the generated app:

![Structure section](img/object-attributes-rendering.png)

### Filter queries

You can use [filter queries](https://developer.4d.com/go-mobile/docs/project-definition/data#filter-queries) specific to object attributes in order to return and display filtered data. To do so, simply insert your attribute and property in the Filter query of the **[Data](https://developer.4d.com/go-mobile/docs/project-definition/data)** section.

For instance, consider a Clients table with an Address object-type attribute containing several objects with the following key/values:


```4d
{
    $Obj:=New object
    $Obj.name:="4D SAS"
    $Obj.address1:="66 rue de Sartrouville"
    $Obj.address2:="Parc les Erables, bâtiment 4"
    $Obj.zipCode:="78230"
    $Obj.city:="Le Pecq"
    $Obj.country:="France"
    $Obj.phoneNumber:={
        "OfficePhone":"+33 1 30 53 92 00"
        "HomePhone":"+33 1 30 53 92 00"
    }
    $Obj.email:=[
        "john@test.com"
        "john@4d.com"
    ]
    $Obj.website:="fr.4d.com"
}
```


#### Filter by a simple object's value

If you want to display data filtered by an object, such as a list of your clients only based in France, you need to filter your query by country to get only the records containing the `France` value. Therefore, insert the following syntax in the Filter query field:

```4d

Address.country = "France"

```
#### Filter by a collection's value

If you want to display data filtered by an element of a collection, such as a specific client's email contained in a collection, you need to filter your query by email to get only the records containing the `john@4d.com` value. Therefore, insert the following syntax in the Filter query field:

```4d

Address.email[] = "john@4d.com"

```


## Incremental reload

### Allow structure adjustments

For the best user experience, 4D for iOS and 4D for Android implement an automatic feature for the incremental reload of data. It means that only new, modified or deleted data from the database will be updated to the app. This optimization enhances drastically loading time.

To enable this optimization, 4D for iOS and 4D for Android need the following structure elements:

* A `__DeletedRecords` table to store deleted records
* and `__GlobalStamp` fields to store modification stamps for each published table in your mobile application

You can let the 4D mobile editor do all the work for you and add the necessary structure elements: just select **Allow 4D to make necessary structure adjustments for an optimized mobile data update** option.

:::note

These optimizations are required for both local and server databases.

:::

### Pull to refresh

On the mobile app side, your data is updated each time you launch your app and each time your app goes foreground, to get constant updated data.

In normal use, simply swipe down from any listform to reload your data.

From iPhone settings, you can reset your app data and find information about your app.

:::note

When an important maintenance operation is performed on the database side (Recover by tag / Restoration / Compacting) a Full reload is necessary on the mobile app. In this case, the admin shall notify mobile app users.

::: 







