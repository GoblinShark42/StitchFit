//**********************/
// Component Structure
//**********************/
App
  |-- Main Container (--- state; instantiate 4 different Category boxes, each have a Modal)
        |
        |    
        |-- Category Display (boxes show up on screen)
        |   |
        |   |---Modal
        |         |----AddItem (button, send POST request, also would change state)
        |         |
        |         |-- MulipleItemsDisplay (instantiate x number of ItemDisplay) 
        |               |--ItemDisplay
        |                     |--DeleteItem (not implemented yet)
        |
        |-- OutfitCreator (listening to the state)
             |-- DraftOutfit/DisplayOutfit
             |-- OutfitSave Button (Post request to Outfits table)
 



//******************************/
// Components and Functionalities
//******************************/
0. Login.jsx => 

1. App.jsx => render Main Container
    ---------------------------------------------------------------------------------
    Input: User id, user name
    Renders: Main container and menu buttons
    Child Component: MainContainer.jsx
                     <MainContainer userId = 'asefjowef83r8' userName = 'Goobly Shark'>
                     * actual props should be variable names
    ---------------------------------------------------------------------------------
    - Displays main container (that displays category buttons)
    - Displays welcome title with the user name

2. MainContainer.jsx (displays category boxes)
    ---------------------------------------------------------------------------------
    Input: User id
    Renders: CategoryDisplay buttons 
    Child Conponent: Modal.jsx <CategoryDisplay category = 'tops' userId = 'asefjowef83r8'> 
                     * actual props should be variable names
    ---------------------------------------------------------------------------------
    - Displays four category boxes depending on the user id and category props (tops, bottoms, shoes, accessories)
    - displaying Modal
    - Listens to the click events
    - When a click event happens, this component creates a Modal with the userId and category 


      3. CategoryDisplay.jsx
          --------------------------------------------------------------------
          Input: category name (to display each menu and icon), user id
          Output/render: each category button
          Child Component: Modal.jsx <Modal category = 'tops'> 
                           * actual props should be variable names
          --------------------------------------------------------------------
          - Listens to the click events
          - When a click event happens, invokes a fetch request to the database
              DB：GET /wardrobe/accessories
          - .then Displays Modal invoking Modal.jsx passing the result of the GET request

 4. Modal.jsx
    ---------------------------------------------------------------------------------
    Input: category name, user id, result of the GET request from the previous
    Renders: Displays Modal (Popup NewBox),
    Child Compoents: AddItem.jsx
                          <AddItem category ='tops'>
                     MulipleItemsDisplay.jsx 
                          <MulipleItemsDisplay 
                            category='tops' 
                            userId = 'asefjowef83r8'>
    ---------------------------------------------------------------------------------
    - Displays Title depending on the pssed in category
    - Displays AddItem box
    - Displays MultipeItemsDisplay box passing in the user id and the category name



        5. AddItem.jsx
        ----------------------------------------------------------------------
        Input: category name, user id
        Renders: Input boxes and add buttons, MultipleItemsDisplay box
        Child Compoents: MultipleItemsDisplay.jsx
                          <MultipleItemsDisplay 
                                category ='tops' 
                                userId = 'asefjowef83r8', 
                                imgUrl = 'http://abc.com/xxx.jpg', 
                                itemId = '' >
        ----------------------------------------------------------------------
        - Displays input boxes with '+' buttons
        - Listens to onClick events on each button
        - When a click event happens, this coponent sends a POST request to the database passing the input text  
          - POST /wardrobe/addTop
          - .then if success, displays the success message 
          - .then calls the MultipleItemsDisplay box passing in the returend URL , category name, item id, and user id



        6. MultipleItemsDisplay.jsx
        ----------------------------------------------------------------------
        Input: category name, user id
        Renders: Multiple Items Display box 
                       Previously saved items (if any)
        Child Compoents: ItesDisplay.jsx
                          <ItemDisplay imgUrl = 'http://abc.com/xxx.jpg'
                                       category ='tops' 
                                       userId = 'asefjowef83r8', 
                                       itemId = ''>
        ----------------------------------------------------------------------
        - Displays Category name 
        - Invokes GET request to DB with category name and userId
          -DB：GET /wardrobe/accessories
          - If items exist, displays the ItemDisplay boxes (with pictures and buttons)
          - If no items were found, do nothing


        7. ItemsDisplay.jsx
        ----------------------------------------------------------------------
        Input: Image URL, item id, user id, category name,
        Render: Item image, '+' button, '-' button
        Child Compoents: OutfitSubmitter.jsx
                          <OutfitSubmitter 
                            imgUrl = 'http://abc.com/xxx.jpg'
                            category = 'tops'
                            userId = 'asefjowef83r8'
                            itemId = ''>
        ----------------------------------------------------------------------
        - Displays item picture and  '+' button, '-' button
        - Listens to onClick events on buttons
        - When the add button is clicked 
              - Checks if there is an open OutfitSubmitter,
              - Calls OutfitSubmitter.jsx
                  - passing category id, item id, user id, and imageUrl
        - When the delete button is clicked, sends a DELETE request to the database
                  - DELETE /wardrobe/delete:id
                  - deletes the item from the db
                  - if success, remove the node from MultipleItemsDisplay.jsx



8. OutfitSubmitter.jsx
----------------------------------------------------------------------
Input: Image URL, item id, user id, category name
Render: Item images, '-' button, submit button, outfit name

props/state : itemIds, category name, userId, and outfit name/id/keyword
----------------------------------------------------------------------
  - Displays the GOOBLY SHARK!! (as a background image)
  - Displays mini boxes with the input item image '-' buttons, and a submit button
  - Holds a variable/state to hold
           list of input itemIds, {tops: itemId, bottoms: itemId}
           userId,
           outfit name/id/keyword ???,

  - Listens to the onClick event on the submit button and - button
  - When the submit button is clicked
      - Sends a post request to the database ：POST /wardlobe/addOutfit
        with the itemIds, userId, and outfit name/id/keyword ???
      - If success, displays success message
  - When the '-' button is clicked, remove the itemId, from the props/state




Plan B
  App
  |-- Main Container (Menu --- state; instantiate 4 different Category boxes, each have a Modal)
        |
        |-- AddAccessory (button, send POST request, also would change state)
        |-- AddTops (button, send POST request, also would change state)
        |-- AddBottoms (button, send POST request, also would change state)
        |-- AddShoes (button, send POST request, also would change state)    
        |
        |-- Category (boxes show up on screen, 4 of these instantiated)
        |   |
        |   |--GetALLAccessory (GET request, display everything)
        |   |--GetALLTops (GET request, display everything)
        |   |--GetALLBottoms (GET request, display everything)
        |   |--GetALLShoes (GET request, display everything)
        |
        |
        |-- OutfitSubmitter (user manually input the top ID, Bottom ID, Accessory ID, Shoes ID) w/ a submit button 
        |-- OutfitSHOW 
