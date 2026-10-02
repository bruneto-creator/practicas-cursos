const { check } = require('express-validator');

const validatorUserCreate = [
  check('nombre').notEmpty().withMessage('El campo nombre es obligatorio').isString().isLength({ min: 2, max: 100 }),
  check('apellidos').notEmpty().withMessage('El campo apellidos es obligatorio').isString().isLength({ min: 2, max: 100 }),
  check('nick').notEmpty().withMessage('El campo nick es obligatorio').isString().isLength({ min: 2, max: 20 }),
  check('correo').notEmpty().withMessage('El campo correo es obligatorio').isEmail().withMessage('Debe ser un correo válido'),
  check('contraseña').notEmpty().withMessage('El campo contraseña es obligatorio').isString().isLength({ min: 8 }).withMessage('La contraseña debe tener mínimo 8 caracteres'),
  check('perfil_id').notEmpty().withMessage('El campo perfil id es obligatorio').isInt().withMessage('El campo perfil id debe ser número')
];

const validatorUserUpdate = [
  check('nombre').optional().isString().isLength({ min: 2, max: 100 }),
  check('apellidos').optional().isString().isLength({ min: 2, max: 100 }),
  check('nick').optional().isString().isLength({ min: 2, max: 20 }),
  check('correo').optional().isEmail(),
  check('contraseña').optional().isString().isLength({ min: 8 }),
  check('perfil_id').optional().isInt(),
  check('activo').optional().isBoolean()
];

module.exports = { validatorUserCreate, validatorUserUpdate };
