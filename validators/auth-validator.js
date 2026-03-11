const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars." })
    .max(200, { message: "Name must not more than 200 chars." }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 chars." })
    .max(200, { message: "Email must not more than 200 chars." }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 chars." })
    .max(200, { message: "Phone must not more than 10 chars." }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(10, { message: "Password must be at least of 10 chars." })
    .max(200, { message: "Password must not more than 200 chars." }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be at least of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must be at least of 6 characters" })
    .max(1024, "Password can't be greater than 1024 characters"),
});

module.exports = { signupSchema, loginSchema };
