### Name of your project

## Dev stack bulder website

---

## A little description

DevStack Builder হলো একটি ডায়নামিক ওয়েব অ্যাপ্লিকেশন, যেখানে ডেভেলপাররা তাদের পছন্দ অনুযায়ী টেকনোলজি স্ট্যাক (Technology Stack) সহজে বেছে নিতে পারেন।

### Main Feature:

- \*\*Dynamis Sidebar (Your Stack): সিলেক্ট করা সব টেকনোলজি এক জায়গায় সুবিন্যস্ত তালিকার মতো দেখায়।

- \*\*Single Remove: যেকোনো কার্ডের ডিলিট (বা ট্র্যাশ) বাটনে ক্লিক করে নির্দিষ্ট টেকনোলজি স্ট্যাক থেকে বাদ দেওয়া যায়।

- \*\*Remove All: "Remove All" বাটনে ক্লিক করে পুরো স্ট্যাকের সব আইটেম একসাথে খালি করা যায়।

- \*\*Empty & Loading State: কোনো টেকনোলজি সিলেক্ট না থাকলে খালি বক্সের মেসেজ দেখায়

---

## Technology that you use

    . HTML
    . Tailwind CSS
    . TypeScript
    . React.js
    . React icons
    . React Tostify

## 3 features about your project

- \*\*Interactive Selection & Real-Time Stack Tracking
  এক ক্লিকেই পছন্দমতো টেকনোলজি সিলেক্ট করা যায়, যা সাথে সাথে বাটনের স্টাইল বদলে দেয় এবং কয়টি টেকনোলজি সিলেক্ট হলো তার হিসাব রিয়েল-টাইমে দেখায়।

- \*\*Dynamic Sidebar & Flexible Item Removal
  খালি অবস্থায় সুন্দর ড্যাশড মেসেজ বক্স দেখায় এবং ডাটা যোগ হলে কার্ড আকারে দেখায়। পছন্দমতো একটি আইটেম অথবা "Remove All" বাটনে ক্লিক করে সব টেকনোলজি একবারে বাদ দেওয়া যায়।

- \*\*Smooth Loading & Instant Toast Feedback
  ডাটা ফেচ করার সময় স্মুথ Loading State হ্যান্ডেল করে এবং প্রতিটি অ্যাকশনে (যেমন: এড বা রিমুভ) সাথে সাথে আকর্ষণীয় Toast popup দেখায়।

---

---

## What is JSX, and why is it used in React?

- **JSX** (JavaScript XML) হলো JavaScript-এর একটি সিনট্যাক্স, যার মাধ্যমে React-এ HTML-এর মতো কোড লেখা যায়।
- **React** এ UI বা component সহজে তৈরি ও পড়ার জন্য JSX ব্যবহার করা হয়।

## What is the difference between props and state?

- **Props:** Parent component থেকে Child component-এ data পাঠাতে ব্যবহার করা হয়। এটি পরিবর্তন করা যায় না।
- **State:** Component-এর নিজস্ব data সংরক্ষণ করে এবং প্রয়োজন অনুযায়ী পরিবর্তন করা যায়।

## What does the useState hook do, and where did you use it in this project?

**useState** হলো React-এর একটি স্টেট ম্যানেজমেন্ট হুক, যা কম্পোনেন্টের ডাটা পরিবর্তন ট্র্যাক করে এবং ডাটা চেঞ্জ হলে UI-কে অটোমেটিক্যালি আপডেট বা রিরেন্ডার করে। এই প্রজেক্টে লোকাল JSON থেকে টেকনোলজির ডাটা ফেচিং এবং লোডিং স্টেট সামলানোর জন্য useState ব্যবহার করা হয়েছে। এছাড়া ইউজার কোন কোন টেকনোলজি সিলেক্ট বা রিমুভ করছে, সেই সিলেক্টেড আইটেমগুলোর লিস্ট আপডেট রাখার কাজে এটি ব্যবহার করা হয়েছে।

## What does the useEffect hook do, and why did you need it to load the JSON data?

**useEffect** হলো React-এর একটি Hook, যা Component render হওয়ার পর নির্দিষ্ট কাজ চালাতে ব্যবহার করা হয়। JSON data লোড করার জন্য এটি ব্যবহার করা হয়েছে, যাতে Component load হওয়ার পর JSON data fetch করা যায়।

## Why does every item in a .map() list need a unique key prop?

প্রতিটি item-এর পরিচয় আলাদাভাবে শনাক্ত করতে unique key ব্যবহার করা হয়। এতে React সহজে বুঝতে পারে কোন item পরিবর্তন, যোগ বা মুছে গেছে এবং দ্রুত UI update করতে পারে।

## What is conditional rendering? Show one place you used it (example: the empty stack message).

কন্ডিশনাল রেন্ডারিং (Conditional Rendering) হলো কোনো নির্দিষ্ট শর্ত (Condition) সত্য বা মিথ্যা হওয়ার ওপর ভিত্তি করে UI-তে ভিন্ন ভিন্ন উপাদান বা কম্পোনেন্ট প্রদর্শন করা।

আমাদের প্রজেক্টে সাইডবারে Empty Stack Message দেখানোর ক্ষেত্রে আমরা এটি ব্যবহার করেছি:
এখানে selectedTechnologies.length === 0 শর্তটি সত্য হলে "Your stack is empty" মেসেজটি দেখায়, আর কোনো টেকনোলজি সিলেক্ট করা থাকলে কার্ডের তালিকাটি রেন্ডার করে।

## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Props ব্যবহার করে Parent থেকে Child-এ data পাঠানো হয়। আর callback function Props হিসেবে Child-এ পাঠিয়ে Child থেকে Parent-এ data বা event পাঠানো যায়।
