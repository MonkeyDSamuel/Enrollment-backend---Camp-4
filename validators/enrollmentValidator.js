const{body}=require('express-validator');

exports.validateEnrollment=[
    body('Student_Id').isMongoId().withMessage('Invalid Student ID'),
    body('Course_Id').isMongoId().withMessage('Invalid Course ID'),
    body('Created_At').isISO8601().withMessage('Invalid  date format')
    //checks if the value is a valid ISO 8601 date format, such as , 
    //2025-07-25
    // body('DepartmentId').isMongoId().withMessage('Invalid Department ID'),
    // body('Contact').notEmpty().withMessage('Contact is required')
];