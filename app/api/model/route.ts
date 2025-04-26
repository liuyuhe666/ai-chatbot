import data from '@/data/model.json'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(data)
}
