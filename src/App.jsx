import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ChefListPage from './components/ChefListPage'
import AddChefModal from './components/AddChefModal'
import OrderListPage from './components/OrderListPage'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/chef-list' element={<ChefListPage />} />
                <Route path='/add-chef' element={<AddChefModal />} />
                <Route path='/order-list' element={<OrderListPage />} />
            </Routes>
        </div>
    )
}

export default App