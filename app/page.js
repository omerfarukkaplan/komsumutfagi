"use client"

import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Home() {
  const [meals, setMeals] = useState([])

  useEffect(() => {
    fetchMeals()
  }, [])

  async function fetchMeals() {
    const { data } = await supabase
      .from("meals")
      .select("*")
      .eq("active", true)

    setMeals(data || [])
  }

  return (
    <div style={{padding:"40px"}}>
      <h1>KomşuMutfağı</h1>

      {meals.map(meal => (
        <div key={meal.id} style={{marginBottom:"20px"}}>
          <h3>{meal.name}</h3>
          <p>{meal.description}</p>
          <b>{meal.price} TL</b>
        </div>
      ))}
    </div>
  )
}
