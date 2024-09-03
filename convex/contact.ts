import {v} from "convex/values";
import {mutation} from "./_generated/server"

export const contactData = mutation({
    args:{
        Fname: v.string(),
        Lname: v.string(),
        email: v.string(),
        subject: v.string(),
        message: v.string(),
    },
    handler: async (ctx, args) => {
        await ctx.db.insert("student-data", {
            Fname: args.Fname,
            Lname: args.Lname,
            email: args.email,
            subject: args.subject,
            message: args.message,
        })
    }
})