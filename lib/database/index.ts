import mongoose from 'mongoose'

const MONGODB_URI = process.env.NONGODB_URI

const cached = (global as any ).mongoose || {conn: null, promise: null}

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn

    if(!MONGODB_URI) throw new Error('MONGODB_URI IS NOT FOUND!')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URI, {
        dbName: 'EventExpress',
        bufferCommands: false,
    })

    cached.conn = await cached.promise
    return cached.conn
}
