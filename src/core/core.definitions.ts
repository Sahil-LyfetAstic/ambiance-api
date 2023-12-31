import { ApiQueryOptions, ApiResponseOptions } from '@nestjs/swagger';

export const QueryWhere: ApiQueryOptions = {
  name: 'where',
  required: false,
  schema: { format: 'json' },
  examples: {
    empty: {
      summary: 'All records',
    },
    equals: {
      summary: 'Equal conditions',
      value: JSON.stringify({
        field_1: 'value',
        field_2: true,
        field_3: null,
      }),
    },
    others: {
      summary: 'Other conditions',
      value: JSON.stringify({
        field_1: { $ne: 'value' },
        field_2: { $gte: 5, $lte: 10 },
        field_3: { $in: [1, 2], $nin: [3, 4] },
      }),
    },
    populate: {
      summary: 'Populate conditions',
      value: JSON.stringify({
        '$populate_1.field_1$': 'value',
        '$populate_1.field_2$': { $gte: 5, $lte: 10 },
        '$populate_2.field_3$': { $in: [1, 2], $nin: [3, 4] },
      }),
    },
  },
};

export const QueryPopulate: ApiQueryOptions = {
  name: 'populate',
  required: false,
  schema: { format: 'json' },
  examples: {
    empty: {
      summary: 'No populate',
    },
    simple: {
      summary: 'Direct populate',
      value: JSON.stringify(['populate_1', 'populate_2']),
    },
    nested: {
      summary: 'Nested populate',
      value: JSON.stringify([
        'populate_1',
        'populate_1.child_populate_1',
        'populate_1.child_populate_2',
      ]),
    },
  },
};

export const QuerySort: ApiQueryOptions = {
  name: 'sort',
  required: false,
  schema: { format: 'json' },
  examples: {
    empty: {
      summary: 'Default sort',
    },
    single: {
      summary: 'Sort single',
      value: JSON.stringify(['field_1']),
    },
    multi: {
      summary: 'Sort multi',
      value: JSON.stringify(['field_1', 'field_2']),
    },
    desc: {
      summary: 'Sort direction',
      value: JSON.stringify([
        ['field_1', 'desc'],
        ['field_2', 'asc'],
      ]),
    },
    populate: {
      summary: 'Sort populate',
      value: JSON.stringify([
        ['populate_1', 'field_1', 'desc'],
        ['populate_2', 'field_2', 'asc'],
      ]),
    },
  },
};

export const QuerySelect: ApiQueryOptions = {
  name: 'select',
  required: false,
  schema: { format: 'json' },
  examples: {
    empty: {
      summary: 'Select all fields',
    },
    specific: {
      summary: 'Select specific fields',
      value: JSON.stringify(['id', 'name']),
    },
  },
};

export const QuerySearch: ApiQueryOptions = {
  name: 'search',
  required: false,
  examples: {
    default: {
      summary: 'No search',
    },
    specific: {
      summary: 'Search string',
      value: 'search text',
    },
  },
};

export const QueryLimit: ApiQueryOptions = {
  name: 'limit',
  required: false,
  schema: { type: 'integer' },
  examples: {
    default: {
      summary: 'Default limit',
      value: 10,
    },
    custom: {
      summary: 'Custom limit',
      value: 25,
    },
    empty: {
      summary: 'Without limit',
      value: -1,
    },
  },
};

export const QueryOffset: ApiQueryOptions = {
  name: 'offset',
  required: false,
  schema: { type: 'integer' },
  examples: {
    default: {
      summary: 'Default offset',
      value: 0,
    },
    custom: {
      summary: 'Custom offset',
      value: 25,
    },
  },
};

export const QueryDeleteMode: ApiQueryOptions = {
  name: 'mode',
  required: false,
  enum: ['soft', 'hard'],
  examples: {
    soft: {
      summary: 'Soft delete mode',
      value: 'soft',
    },
    hard: {
      summary: 'Hard delete mode',
      value: 'hard',
    },
  },
};

export const ResponseForbidden: ApiResponseOptions = {
  description: 'Forbidden',
  schema: {
    properties: {
      message: {
        type: 'string',
        example: 'Forbidden',
      },
    },
  },
};

export const ResponseInternalServerError: ApiResponseOptions = {
  description: 'Server error',
  schema: {
    properties: {
      error: {
        type: 'object',
      },
      message: {
        type: 'string',
        example: 'Server error',
      },
    },
  },
};
