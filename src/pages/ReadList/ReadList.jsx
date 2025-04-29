import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getItemsData } from '../../utils/AddToData';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    
    useEffect(()=> {
        const localStoreBookData = getItemsData();
        // console.log(localStoreBookData);
        const convertBookData = localStoreBookData.map((book)=> parseInt(book));
        // console.log(convertBookData);
        const myReadList = data.filter(book => convertBookData.includes(book.bookId));
        setReadList(myReadList);
    },[])

  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read a Book</Tab>
          <Tab>Add to Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content: {readList.length}</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default ReadList
