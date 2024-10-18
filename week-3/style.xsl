<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <!-- Define that output format should be HTML -->
    <xsl:output method="html" indent="yes" />
    
    <!-- Match the root element -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Employee Table</title>
                <style>
                    /* Table styles */
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                        font-size: 18px;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 10px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                    caption {
                        font-size: 24px;
                        margin-bottom: 10px;
                        font-weight: bold;
                    }
                </style>
            </head>
            <body>
                <h2>Employee Details</h2>
                
                <!-- Create the table with headers -->
                <table>
                    <caption>Employee List</caption>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Contact</th>
                        <th>Salary</th>
                        <th>Address</th>
                    </tr>
                    
                    <!-- Loop through each employee element -->
                    <xsl:for-each select="employees/employee">
                        <tr>
                            <td><xsl:value-of select="@emp_id"/></td>
                            <td><xsl:value-of select="emp_name"/></td>
                            <td><xsl:value-of select="emp_designation"/></td>
                            <td><xsl:value-of select="emp_contact"/></td>
                            <td><xsl:value-of select="emp_salary"/></td>
                            
                            <!-- Address concatenation -->
                            <td>
                                <xsl:value-of select="emp_address/house_no"/> 
                                <xsl:text>, </xsl:text>
                                <xsl:value-of select="emp_address/street"/> 
                                <xsl:text>, </xsl:text>
                                <xsl:value-of select="emp_address/locality"/> 
                                <xsl:text>, </xsl:text>
                                <xsl:value-of select="emp_address/city"/> 
                                <xsl:text>, </xsl:text>
                                <xsl:value-of select="emp_address/state"/>
                            </td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
