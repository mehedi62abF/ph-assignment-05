## 1 .What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Ans :--

**1. getElementById**- Selects a single element based on its unique id attribute.Returns a single Element object.
**2.getElementsByClassName** - Selects all elements that have the specified class name.Returns a live HTMLCollection of elements.
**3.querySelector** - Returns a single Element object, or null. Selects the first element that matches a specified CSS selector
**4.querySelectorAll** - Selects all elements that match a given CSS selector.Returns a static NodeList of all matching elements.

---

## 2. How do you create and insert a new element into the DOM?

## Ans :--

**1st step:** Create the element (const div = document.createElement("div");)
**2nd step :** Add content or attributes(div.innerText = "Programing-Hero";
div.classList.add("my-class");)
**3rd step :** Find the parent element(const parent = document.getElementById("container");)
**4th step :** Insert the new element into the DOM (parent.appendChild(div);)

---

## 3. What is Event Bubbling and how does it work?

## Ans :--

Event Bubbling means when an event happens on a child element, it moves to its parent, then grandparent, and so on — up to the root.
When you click on a inner element, it reacts first, then the bigger outer elements around it also react — one by one, going upward.

If a button is inside a div, and you click the button:
First, the button's event runs,
Then the div's event runs after that.
So, the event moves from inside to outside — this is called bubbling.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

## Ans :--

Event Delegation means adding one event listener to a parent element to handle events for its child elements.Instead of adding event listeners to each item, you add it to their common parent.

## It is Useful Because:--

1. Saves memory
2. Works for new elements added later
3. Cleaner and faster code

---

## 5. What is the difference between preventDefault() and stopPropagation() methods?

## Ans :--

1. preventDefault() stops the browser’s default action (like stopping a form from submitting or a link from opening).
2. stopPropagation() stops the event from going up to parent elements (blocks bubbling).

---
