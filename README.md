# ARINZE-NWOBA-APP-

This is a TypeScript project that defines a `filterPersons` function. The function allows you to filter a list of people based on their type (either `user` or `admin`) and some other criteria (such as name, email, etc.). The `filterPersons` function accepts `user` or `admin` as the `personType` argument and uses the criteria provided to filter through a list of users and admins.

Features

- Filter by type**: The function can filter a list of users or admins by their type (`user` or `admin`).
- Partial criteria**: The function allows you to filter based on partial properties of either `User` or `Admin` objects (excluding the `type` property).
- Flexible criteria**: You can filter by any field, such as `name` or `email`, for the selected person type.

 Types

- User: Represents a regular user with properties like `id`, `name`, `email`, and `type`.
- Admin: Represents an administrator with properties like `id`, `name`, `email`, and `type`.
