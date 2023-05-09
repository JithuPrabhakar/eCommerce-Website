import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Link, useLocation, useParams } from 'react-router-dom'
import { addToCart } from '../actions/cartActions'
import Message from '../components/Message'

const Cart = () => {
  const { id } = useParams()
  const location = useLocation()

  const quantity = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity))
    }
  }, [dispatch, id, quantity])

  return <div>Cart</div>
}

export default Cart
