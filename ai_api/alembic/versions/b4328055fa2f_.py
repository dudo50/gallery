"""empty message

Revision ID: b4328055fa2f
Revises: 73cbf5c3801e
Create Date: 2024-08-16 19:29:58.078418

"""
from typing import Sequence, Union

import sqlalchemy as sa
from alembic import op
from pgvector.sqlalchemy import vector

# revision identifiers, used by Alembic.
revision: str = 'b4328055fa2f'
down_revision: Union[str, None] = '73cbf5c3801e'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('image',
                    sa.Column('id', sa.Uuid(), nullable=False),
                    sa.Column('image_vector', vector.VECTOR(dim=1000), nullable=False),
                    sa.Column('image_caption', sa.VARCHAR(length=1024), nullable=False),
                    sa.PrimaryKeyConstraint('id')
                    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('image')
    # ### end Alembic commands ###
